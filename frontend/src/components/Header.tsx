import { useState, useEffect } from "react";
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import BookLogo from "/bookicon.svg";
import { Link } from "react-router-dom";
import { signIn, signOut } from "../auth/auth";
import { useAuth } from "../auth/AuthUserProvider";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "start",
    gap: "2rem",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple({ links }: HeaderSimpleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useAuth(); // invoke hook

  // Update isLoggedIn state whenever user changes
  useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  // if logged in then you should sign out, if not sign in
  const handleLoginClick = async () => {
    console.log("Current auth state:", isLoggedIn, user);

    if (isLoggedIn) {
      console.log("Attempting to sign out");
      await signOut();
      console.log("After sign out");
    } else {
      console.log("Attempting to sign in");
      const result = await signIn();
      console.log("Sign in result:", result);
    }
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={60}>
      <Container className={classes.header}>
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <img src={BookLogo} alt="BookFit Logo" width={28} height={28} />
            <span style={{ fontWeight: "bold" }}>BookFit</span>
          </div>
          <Group spacing={5} className={classes.links}>
            {items}
          </Group>
        </div>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {isLoggedIn && user && <p>Hello, {user.displayName}!</p>}
          <button onClick={handleLoginClick}>
            {isLoggedIn ? "Sign Out" : "Sign In"}
          </button>
        </div>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}
