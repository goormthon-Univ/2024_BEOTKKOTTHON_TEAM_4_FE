// Tooltip 컴포넌트 수정
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const TooltipContainer = styled.div`
  position: relative;
`;

const TooltipButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 1000;
`;

const TooltipContent = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 1000;
  ${({ show }) => (show ? 'display: block;' : 'display: none;')}
`;

const Tooltip = ({ tooltipImage }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const toggleTooltip = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <TooltipContainer>
      <TooltipButton onClick={toggleTooltip}>
        <Image
          src={tooltipImage.button}
          alt={'툴팁 버튼'}
        />
      </TooltipButton>
      <TooltipContent show={showTooltip}>
        <Image src={tooltipImage.content} alt={'툴팁 내용'} />
      </TooltipContent>
    </TooltipContainer>
  );
};

export default Tooltip;
