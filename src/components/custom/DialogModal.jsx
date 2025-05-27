/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ccoYAeAgkWu
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter} from "@/components/ui/dialog"
import {Button} from "@/components/ui/button"
import {useState} from "react";
import * as React from "react";
import {twMerge} from "tailwind-merge";

const DialogModal = ({
                       modal = {
                         title: "Title",
                         desc: "Text Descriptions",
                         content: <div/>,
                         textConfirm: "Yes",
                         textCancel: "No",
                         onConfirmClick: null,
                         onCancelClick: null,
                         modal: true
                       },
                       onDismissOutside = false,
                       ...props
                     }) => {
  const [isOpen, setIsOpen] = useState(true); // Keep the dialog open

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if (!open) {
        modal?.onCancelClick();
      }
    }} modal={modal?.modal} className={""}>
      <DialogContent onInteractOutside={(e) => {
        if (!onDismissOutside) {
          e.preventDefault();
        }
      }} onEscapeKeyDown={(e) => {
        if (!onDismissOutside) {
          e.preventDefault();
        }
      }}
      className={twMerge("", props?.className)}>
        <DialogHeader>
          <DialogTitle>{modal?.title}</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {modal?.desc}
        </DialogDescription>
        {modal?.content}

        {(modal?.textCancel && modal?.textConfirm) &&
          <DialogFooter>
            {modal?.textCancel && <Button variant="outline" onClick={modal?.onCancelClick}>{modal?.textCancel}</Button>}
            {modal?.textConfirm && <Button onClick={modal?.onConfirmClick}>{modal?.textConfirm}</Button>}
          </DialogFooter>
        }
      </DialogContent>
    </Dialog>
  )
}
export default DialogModal