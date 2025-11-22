import {
    AlertDialog as ShadcnAlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog"

  interface AlertDialogProps {
    isAlertDialogOpen: boolean
    onAlertDialogOpenChange: () => void
    handleOnDeleteLink: () => void
  }
  
  export function AlertDialog({ isAlertDialogOpen, onAlertDialogOpenChange, handleOnDeleteLink }: AlertDialogProps) {
    return (
      <ShadcnAlertDialog open={isAlertDialogOpen} onOpenChange={onAlertDialogOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar Ação?</AlertDialogTitle>
            <AlertDialogDescription>
                Você tem certeza que deseja excluir este link?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex gap-2">
            <AlertDialogCancel className="flex-1 bg-white text-blue-base hover:bg-white/60">Cancelar</AlertDialogCancel>
            <AlertDialogAction className="flex-1" onClick={() => handleOnDeleteLink()}>Confirmar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </ShadcnAlertDialog>
    )
  }
  