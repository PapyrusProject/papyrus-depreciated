import { PiPencilLineBold, PiPaintBrushBold, PiBooks, PiDatabaseBold, PiDevices, PiHourglassHighBold, PiWrenchBold, PiStrategy } from "react-icons/pi";
import { IProps } from "./AboutCard"

type itensProps = IProps[]

export const itens: itensProps = [
    {
        icon: PiPencilLineBold,
        title: 'Writing and Editing',
        paragraph: "Create and enhance content effectively in a simplified editing environment."
    },
    {
        icon: PiPaintBrushBold,
        title: "Customization",
        paragraph: "Customize the system according to your needs and preferences."
    },
    {
        icon: PiBooks,
        title: "Organization",
        paragraph: "Keep information and tasks organized, enabling quick and efficient access."
    },

    {
        icon: PiStrategy,
        title: "Planning",
        paragraph: "Effortlessly create and track deadlines and tasks for projects and goals."
    },

    {
        icon: PiDatabaseBold,
        title: "Database",
        paragraph: "Store and manage information in a structured manner for easy reference."
    },

    {
        icon: PiDevices,
        title: "All Devices",
        paragraph: "Access your information and work from anywhere, on all devices."
    },

    {
        icon: PiHourglassHighBold,
        title: "Progress Tracking",
        paragraph: "Visualize your progress clearly, maintaining focus and motivation."
    },

    {
        icon: PiWrenchBold,
        title: "Reference Organization",
        paragraph: "Keep all research resources well-organized and accessible."
    },
]