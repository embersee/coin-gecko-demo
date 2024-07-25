import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";

export default function Component() {
  const [selectedAsset, setSelectedAsset] = useState<string>("Bitcoin");
  const handleAssetSelect = (asset: string) => {
    setSelectedAsset(asset);
  };
  return (
    <Select>
      <SelectTrigger className="w-[200px] justify-between">
        <SelectValue placeholder="Choose Assets" defaultValue="Choose Assets">
          {selectedAsset}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="1" onClick={() => handleAssetSelect("Bitcoin")}>
            Bitcoin
          </SelectItem>
          <SelectItem value="2" onClick={() => handleAssetSelect("Ethereum")}>
            Ethereum
          </SelectItem>
          <SelectItem value="3" onClick={() => handleAssetSelect("Litecoin")}>
            Litecoin
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
