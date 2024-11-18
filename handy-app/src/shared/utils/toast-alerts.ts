import { Toaster, toast } from "sonner";

export const ToastAlert = Toaster;

export const showSuccessToast = (message: string): void => {
  toast.success(message);
};

export const showErrorToast = (message: string): void => {
  toast.error(message);
};

export const showNormalToast = (message: string): void => {
  toast(message);
};

export const showInfoToast = (title: string, message: string): void => {
  toast(title, {
    description: message,
  });
};
