// components/DiseaseCard.tsx
import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

interface DiseaseCardProps {
  diseaseName: string;
  imageUrl: string;  // 변경: 이미지 URL을 필수 프롭으로 변경
}

const Card = styled.div`
  width: 169.5px;
  height: auto;
  padding: 20px 21.77px;
  gap: 20px;
  border-radius: 14px 0px 0px 0px;
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DiseaseImage = styled.div`
  width: 100px;
  height: 100px;
  gap: 0px;
`;

const DiseaseName = styled.span`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
  line-height: 19.09px;
  text-align: center;
  color: #333d4b;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;  // 추가: 텍스트 너비 제한
`;

const DiseaseCard: React.FC<DiseaseCardProps> = ({ diseaseName, imageUrl }) => {
  const formattedName = diseaseName.length > 8 ? `${diseaseName.slice(0, 8)}...` : diseaseName;

  return (
    <Card>
      <DiseaseImage>
        <Image src={imageUrl} alt={diseaseName} width={100} height={100} layout="responsive" />
      </DiseaseImage>
      <DiseaseName>{formattedName}</DiseaseName>
    </Card>
  );
};

export default DiseaseCard;
