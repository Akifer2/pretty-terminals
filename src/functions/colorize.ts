import { Colors } from "@/types/enum";

export function colorize(color: Colors, text: string): string {
    if (!Object.values(Colors).includes(color)) {
        throw new Error(`${color} is not a valid color`);
    }

    return `\x1b[${color}m${text}\x1b[0m`;
}
