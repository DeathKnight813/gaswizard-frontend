import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useBalance, useContractRead } from "wagmi";
import apiOfCoinLore from "../../../utils/apiOfCoinLore";
import { BUSDT_CONTRACT_ABI, BUSDT_CONTRACT_ADDRESS, COINLORE_ID_OF_BNB, COINLORE_ID_OF_USDT, CONTRACT_ADDRESS } from "../../../utils/constants";
import DialogWithBnb from "./DialogWithBnb";
import DialogWithBusdt from "./DialogWithBusdt";
import HowToBuy from "./HowToBuy";
import TokenSale from "./TokenSale";

/* ----------------------------------------------------------- */

interface IBalance {
  bnb: number;
  busdt: number;
}

/* ----------------------------------------------------------- */

export default function TokenSaleSection() {

  const [dialogBnbOpened, setDialogBnbOpened] = useState<boolean>(false)
  const [dialogBusdtOpened, setDialogBusdtOpened] = useState<boolean>(false)
  const [balance, setBalance] = useState<IBalance>({
    bnb: 0,
    busdt: 0
  })
  const [balanceInUsd, setBalanceInUsd] = useState<number>(0)

  const [debouncedBalance] = useDebounce(balance, 2000)

  /* ------------------ Get balance of contract --------------- */
  //  Get balance of busdt
  useContractRead({
    address: BUSDT_CONTRACT_ADDRESS,
    abi: BUSDT_CONTRACT_ABI,
    functionName: 'balanceOf',
    args: [CONTRACT_ADDRESS],
    watch: true,
    onSettled: (data: any, error) => {
      if (error) {
        return console.log('>>>>>>> error of balance in busdt => ', error)
      }
      setBalance({
        ...balance,
        busdt: parseInt(data?._hex) / 10 ** 18
      })
    }
  })

  //  Get balance of bnb
  useBalance({
    address: CONTRACT_ADDRESS,
    onSettled: (data, error) => {
      if (error) {
        return console.log('>>>>>>> error of balance in bnb => ', error)
      }
      if (data) {
        setBalance({
          ...balance,
          bnb: parseInt(data.value._hex) / 10 ** data.decimals
        })
      }
    }
  })
  /* ------------------------------------------------------------ */

  const handleDialogBnbOpened = () => {
    setDialogBnbOpened(!dialogBnbOpened)
  }

  const handleDialogBusdtOpened = () => {
    setDialogBusdtOpened(!dialogBusdtOpened)
  }

  useEffect(() => {
    apiOfCoinLore.get(`/ticker/?id=${COINLORE_ID_OF_BNB},${COINLORE_ID_OF_USDT}`)
      .then(response => {
        const balanceOfBusdtInUsd = balance.busdt * response.data[0]['price_usd']
        const balanceOfBnbInUsd = balance.bnb * response.data[1]['price_usd']

        console.log('>>>>>> balanceOfBusdtInUsd => ', balanceOfBusdtInUsd)
        console.log('>>>>>> balanceOfBnbInUsd => ', balanceOfBnbInUsd)

        setBalanceInUsd(balanceOfBusdtInUsd + balanceOfBnbInUsd)
      })
      .catch(error => {

      })
  }, [debouncedBalance])

  return (
    <div>
      <TokenSale
        handleDialogBnbOpened={handleDialogBnbOpened}
        handleDialogBusdtOpened={handleDialogBusdtOpened}
        balanceInUsd={balanceInUsd}
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