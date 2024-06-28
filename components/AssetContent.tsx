import Image from "next/image";
import React from "react";
import SwapToken from "./SwapToken";
import { Asset } from "@/app/lib/types";

interface Props {
  assets: Asset[];
}

const AssetContent: React.FC<Props> = ({ assets }) => {
  const currency = "USD";
  return (
    <div className="flex flex-col gap-5 text-[#FAFAFA] mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      <div className="flex w-full p-5 border border-[#464646] bg-black/80 rounded-lg overflow-x-auto">
        <table className="table-auto w-full min-w-[600px] sm:min-w-[800px]">
          <thead className="border-b border-[#4F4F4F]">
            <tr className="text-left">
              <th className="py-4">ASSETS</th>
              <th className="py-4">LAST TRADE</th>
              <th className="py-4">24H %</th>
              <th className="py-4">24H CHANGE</th>
              <th className="text-[#3980FF] hover:underline text-right">
                <a href="/more">MORE {">"}</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {assets &&
              assets.map((asset, key) => (
                <tr key={key} className="py-2 items-center">
                  <td className="h-16 w-38 flex gap-3 items-center mr-2 mb-3 text-center">
                    <Image
                      src={asset.image_path}
                      alt="alt"
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                    <span className="font-medium text-lg text-[#FAFAFA]">
                      {asset.code}/
                      <span className="text-[#666666]">{currency}</span>
                    </span>
                  </td>
                  <td className="text-[#FAFAFA] font-medium text-lg">
                    ${asset.last_trade}
                  </td>
                  <td
                    className={`font-medium text-lg ${
                      asset.change_24h_percent < 0
                        ? "text-red-500"
                        : asset.change_24h_percent > 0
                        ? "text-cyan-500"
                        : "text-gray-500"
                    }`}
                  >
                    {asset.change_24h_percent}%
                  </td>
                  <td
                    className={`font-medium text-lg ${
                      asset.change_24h_value < 0
                        ? "text-red-500"
                        : asset.change_24h_value > 0
                        ? "text-cyan-500"
                        : "text-gray-500"
                    }`}
                  >
                    ${asset.change_24h_value}
                  </td>
                  <td className="text-right py-2 px-4 text-lg font-medium text-gray-800">
                    <button className="bg-[#6DFF8B] text-[#00554B] font-medium text-lg p-2">
                      Trade
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <SwapToken />
    </div>
  );
};

export default AssetContent;
