import { Link } from "lib/transition";
const RoutedLink = ({ href = "#", children }) => {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
        return <Link href={href}>{children}</Link>;
    }
    return (<a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>);
};
export default RoutedLink;
