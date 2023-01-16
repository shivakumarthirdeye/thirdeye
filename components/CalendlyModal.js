import { useRef } from 'react';
import { InlineWidget } from 'react-calendly';
import { useMediaQuery } from 'react-responsive';
import 'react-responsive-modal/styles.css';

import Modal from 'react-responsive-modal';

function CalendlyModal({ open, toggleModal, item }) {
  const ref = useRef();
  const isMobile = useMediaQuery({
    query: '(max-width: 500px)',
  });

  return (
    <Modal
      ref={ref}
      onClose={toggleModal}
      open={open}
      styles={{
        modal: {
          maxWidth: '1200px',
          width: isMobile ? '100%' : '90%',
          margin: isMobile ? '0' : '1.2rem',
          height: '70%',
          padding: 'unset',
        },
        overlay: {
          background: 'rgba(0, 0, 0, 0.8)',
        },
        closeButton: {},
      }}
      center
      onAnimationEnd={() => {
        if (!open) {
          if (ref.current) {
            ref.current.style.opacity = '0%';
          }
          if (ref.current?.parentElement?.parentElement) {
            ref.current.parentElement.parentElement.style.opacity = '0%';
          }
        }
      }}
    >
      <InlineWidget url='https://calendly.com/yogiyogesh079/30min' />
    </Modal>
  );
}

export default CalendlyModal;
