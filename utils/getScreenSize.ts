export default function getScreenSize() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

    const lgBreakpoint = 1200
    const mdBreakpoint = 768

    if (screenWidth >= lgBreakpoint)
        return "lg";

    if (screenWidth >= mdBreakpoint)
        return "md";

    return "sm";
}