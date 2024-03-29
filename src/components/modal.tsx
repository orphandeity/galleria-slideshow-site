import * as Dialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import styles from "@/styles/modal.module.css";
import Image from "next/image";
import ViewImageIcon from "@/assets/icon-view-image.svg";

export default function Modal({ painting }: ModalProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="absolute left-4 top-4 flex w-[9.5rem] items-center justify-between bg-black/75 px-4 py-[0.875rem] text-[0.625rem] uppercase leading-link-2 tracking-[2.14px] text-white transition-all hover:bg-white/25 md:top-[31.5rem]">
          <Image src={ViewImageIcon} alt="" />
          <span>view image</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />

        <Dialog.Content className={styles.content} aria-describedby={undefined}>
          <VisuallyHidden.Root asChild>
            <Dialog.Title>{painting.name}</Dialog.Title>
          </VisuallyHidden.Root>
          <Dialog.Close asChild className={styles.close}>
            <button>close</button>
          </Dialog.Close>
          <Image
            priority
            src={painting.images.gallery.image}
            alt={`${painting.name} by ${painting.artist.name}`}
            width={painting.images.gallery.size.width}
            height={painting.images.gallery.size.height}
            className="h-auto max-w-[327px] md:max-w-[670px] lg:h-[712px] lg:max-w-fit"
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
