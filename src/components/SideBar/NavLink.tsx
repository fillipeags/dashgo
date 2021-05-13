import { Link, Icon, Text , LinkProps as ChakralinkProps} from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends ChakralinkProps {
  icon: ElementType;
  children: string;
}

export function NavLink({icon, children, ...rest} : NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20"/>
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  );
}