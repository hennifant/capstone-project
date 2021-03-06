import { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showButton && (
        <ScrollButton type="button" onClick={scrollToTop}>
          &#8679;
        </ScrollButton>
      )}
    </>
  );
}

const ScrollButton = styled.button`
  position: fixed;
  bottom: 60px;
  right: 12px;
  font-size: 28px;
  background: #28382c;
  color: #dfbe6f;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  box-shadow: 0 2px 8px #dfbe6f;

  &:hover {
    background: #dfbe6f;
    color: #282828;
    box-shadow: 0 4px 8px #282828;
  }
`;
