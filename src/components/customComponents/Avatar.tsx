import { Avatar } from "@mui/material";
import React from "react";

interface CustomAvatarProps {
    name: string;
    size: number;
}
export const CustomAvatar: React.FC<CustomAvatarProps> = ({ name, size }) => {
    function stringToColor(string: string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = "#";

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    function stringAvatar(name: string) {
        return {
            sx: {
                bgcolor: stringToColor(name),
                width: size,
                height: size,
            },
            children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        };
    }
    return <Avatar {...stringAvatar(name)} />;
};
