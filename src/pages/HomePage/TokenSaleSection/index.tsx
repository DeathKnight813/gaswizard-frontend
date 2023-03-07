import React, { useState } from "react";
import DialogWithBnb from "./DialogWithBnb";
import DialogWithBusdt from "./DialogWithBusdt";
import HowToBuy from "./HowToBuy";
import TokenSale from "./TokenSale";

/* ----------------------------------------------------------- */

export default function TokenSaleSection() {
  const [dialogBnbOpened, setDialogBnbOpened] = useState<boolean>(false)
  const [dialogBusdtOpened, setDialogBusdtOpened] = useState<boolean>(false)

  const handleDialogBnbOpened = () => {
    setDialogBnbOpened(!dialogBnbOpened)
  }

  const handleDialogBusdtOpened = () => {
    setDialogBusdtOpened(!dialogBusdtOpened)
  }

  return (
    <div>
      <TokenSale
        handleDialogBnbOpened={handleDialogBnbOpened}
        handleDialogBusdtOpened={handleDialogBusdtOpened}
      />
      <HowToBuy />
      {dialogBnbOpened && (
        <DialogWithBnb
          open={dialogBnbOpened}
          handler={handleDialogBnbOpened}
        />
      )}
      {dialogBusdtOpened && (
        <DialogWithBusdt
          open={dialogBusdtOpened}
          handler={handleDialogBusdtOpened}
        />
      )}
    </div>
  )
}