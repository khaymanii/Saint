import LogoutModal from "./LogoutModal";

export default function LogoutContainer() {
  return (
    <LogoutModal
      children={undefined}
      isOpen={false}
      setIsOpen={function (open: boolean): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
