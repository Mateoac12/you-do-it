import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const Loading = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 4px solid ${styles.whiteAccent};
  transform: rotate(0);
  border-bottom-color: transparent;
  margin: 80px auto;

  animation: loading 1.5s linear infinite;

  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(2turn);
    }
  }
`
