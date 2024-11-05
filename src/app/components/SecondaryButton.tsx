import { Button, ButtonProps } from "@nextui-org/react";
import React from "react";
interface SecondaryButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Button
      variant="bordered"
      radius="full"
      {...props}
      className={`text-base ${props.className}`}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
