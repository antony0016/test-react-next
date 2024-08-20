'use client';

import {
    Box,
    Flex
} from "@chakra-ui/react";
import RouteLink from "./route-link";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [loginLabel, setLoginLabel] = useState("Logout")

    useEffect(() => {
        if (window.location.pathname === "/login") {
            setLoginLabel("Login")
        } else {
            setLoginLabel("Logout")
        }
    }, [window.location.pathname])

    return (
        <Box
            height="60px"
            bg="blue.500"
            zIndex="1"
            borderBottom={"1px solid lightgray"}
        >
            <Flex
                height="100%"
                justifyContent="space-between"
                alignItems="center"
                padding="0 24px"
            >
                <RouteLink
                    to="/"
                    label="Home"
                ></RouteLink>

                <RouteLink
                    to="/login"
                    label={loginLabel}
                ></RouteLink>
            </Flex>
        </Box>
    );
}