import { Modal as ModalMantine } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Image from 'next/image';
import styles from './Modal.module.css'
import messageIcon from '../../../assets/modal/message-icon.svg'
import sendIcon from '../../../assets/modal/send-icon.svg'
import modalImage from '../../../assets/modal/modal-desk.png'
import { useMediaQuery } from '@mantine/hooks';

export const Modal = () => {
  const [opened, { close }] = useDisclosure(true);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <>
      <ModalMantine.Root
        opened={opened}
        onClose={close}
        centered
        padding={0}
      >
        <ModalMantine.Overlay />
        <ModalMantine.Content style={{ overflow: 'initial' }}>
        <ModalMantine.CloseButton />
          <ModalMantine.Body>
            <div className={styles['containerModal']}>
             {!isMobile && <Image alt='image' src={modalImage} />}
              <div className={styles['contentModal']}>
                <Image alt='icon' src={messageIcon} />
                <h2>Bem Vindo à MAEZTRA</h2>
                <h3>Receba em Primeira mão<br /><strong>desconto e ofertas exclusivas</strong></h3>
                <input placeholder='Digite seu e-mail' type="text" />
                <button>
                  <span>ENVIAR</span>
                  <Image alt='icon' src={sendIcon} />
                </button>
              </div>
            </div>
          </ModalMantine.Body>
        </ModalMantine.Content>
      </ModalMantine.Root>
    </>
  )
}