import { Dialog as _Dialog } from "@headlessui/react";

export const DialogTitle = ({ children }) => (
    <_Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
        {children}
    </_Dialog.Title>
);
