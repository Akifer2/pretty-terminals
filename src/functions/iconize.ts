import { Icons } from "@/types/enum";

export function iconize(icon: Icons, text: string): string {
    if (!Object.values(Icons).includes(icon)) {
        throw new Error(`${icon} is not a valid icon`);
    }

    return `${icon} ${text}`;
}
