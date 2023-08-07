import React from "react";
import OutlinedCard from "../shared/outlined-card";
import Text from "../shared/text";

interface GradingItemProps {
  title: string;
  description: string;
  imageSrc: string;
  highlighted?: boolean;
}

const GradingItem = ({
  title,
  description,
  imageSrc,
  highlighted = false,
}: GradingItemProps) => {
  return (
    <OutlinedCard>
      <div className="flex flex-row gap-4">
        <div>
          <img
            style={{ maxWidth: 48 }}
            src={imageSrc}
            alt={`Image of ${title}`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Text
            variation="subsubheading"
            className={highlighted ? "text-red-600" : ""}
          >
            {title}
          </Text>
          <Text variation="paragraph">{description}</Text>
        </div>
      </div>
    </OutlinedCard>
  );
};

export default GradingItem;
