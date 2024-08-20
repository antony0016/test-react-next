'use client';
import { Box } from "@chakra-ui/react";

const goTo = (to: string) => {
    window.location.href = to
}

export default function RouteLink({
    to, label
}: {
    to: string, label: string
}) {
    return (
        <Box
            fontSize={"24px"}
            cursor="pointer"
            onClick={() => goTo(to)}
        >
            {label}
        </Box>
    )
}