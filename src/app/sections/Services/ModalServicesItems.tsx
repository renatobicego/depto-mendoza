import SecondaryButton from "@/app/components/SecondaryButton";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { cloneElement } from "react";

const ModalServicesItems = ({
  items,
}: {
  items: { label: string; icon: JSX.Element; description?: string }[];
}) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <SecondaryButton
        className="bg-white text-foreground border-white"
        onPress={onOpen}
      >
        Conocer Servicios
      </SecondaryButton>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        scrollBehavior="inside"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Servicios
              </ModalHeader>
              <ModalBody>
                <div className="w-full grid gap-4 grid-cols-1">
                  {items.map((item) => (
                    <div className="flex gap-2 items-center" key={item.label}>
                      {cloneElement(item.icon, { className: "size-8" })}
                      <div className="flex flex-col items-start">
                        <p className="text-lg">{item.label}</p>
                        {item.description && (
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalServicesItems;
