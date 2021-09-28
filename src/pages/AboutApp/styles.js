import styled from '@emotion/styled'
import { styles } from 'config/globalStyles'

export const ArticleContainer = styled.article`
  display: grid;
  row-gap: 40px;
  column-gap: 40px;
  justify-items: center;
  margin: 80px 0;

  @media (${styles.desktopQuery}) {
    grid-template-columns: auto 1fr;
  }
`

export const TextInformation = styled.div`
  > h1,
  > p {
    color: ${styles.blackAccent};
  }

  @media (${styles.desktopQuery}) {
    text-align: left;
    > h1,
    > p {
      color: ${styles.whiteAccent};
    }
  }
`

export const PageContainer = styled.section`
  max-width: 950px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`
