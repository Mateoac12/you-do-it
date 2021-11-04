import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 24px;
  box-sizing: border-box;
  padding: 16px 24px;
  width: calc(100vw - 16px);
  max-width: 600px;
  transform: translateX(-50%);
  background-color: ${styles.whiteAccent};
  border: 1px solid ${styles.lowAccent};
  border-radius: 8px;
  color: ${styles.red500};
  z-index: 100;
  text-align: center;
  opacity: 0;
  animation: alert 5s ease;

  @keyframes alert {
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
