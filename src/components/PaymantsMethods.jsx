import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Tabs, Tab, Box } from "@mui/material";
import InputMask from "react-input-mask";
import { Pix, CreditCard, Receipt } from "@mui/icons-material";
import qrCode from '../images/qrcode.png';

const inputStyle = {
 
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    color: '#020617',
    '&.Mui-focused': {
      borderColor: '#020617',
    },
    '& fieldset': {
      borderColor: '#020617',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#020617',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#020617',
    '&.Mui-focused': {
      color: '#020617',
    },
  },
};

export default function PaymentMethods({ onPaymentSelect }) {
  const [tab, setTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvv: "",
      cpf: "",
    }
  });

  const onSubmit = (data) => {
    console.log('Payment data:', data);
    onPaymentSelect(data);
  };

  const renderPixPayment = () => (
    <div className="p-4">
      <img src={qrCode} alt="QR Code" className="mx-auto w-48 h-48"/>
      <p className="text-center mt-4 font-bold">R$ 1.402,00</p>
      <p className="text-center text-sm text-gray-600">Escaneie o QR Code para pagar</p>
    </div>
  );

  const renderCardPayment = () => (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Controller
        name="cardNumber"
        control={control}
        rules={{ required: "Número do cartão é obrigatório" }}
        render={({ field }) => (
          <InputMask
            mask="9999 9999 9999 9999"
            value={field.value}
            onChange={field.onChange}
            disabled={isLoading}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                label="Número do Cartão"
                variant="outlined"
                error={!!errors.cardNumber}
                helperText={errors.cardNumber?.message}
                fullWidth
                sx={inputStyle}
              />
            )}
          </InputMask>
        )}
      />

      <Controller
        name="cardName"
        control={control}
        rules={{ required: "Nome no cartão é obrigatório" }}
        render={({ field }) => (
          <TextField
            {...field}
            label="Nome no Cartão"
            variant="outlined"
            error={!!errors.cardName}
            helperText={errors.cardName?.message}
            fullWidth
            sx={inputStyle}
          />
        )}
      />

      <div className="grid grid-cols-2 gap-4">
        <Controller
          name="expiry"
          control={control}
          rules={{ required: "Validade é obrigatória" }}
          render={({ field }) => (
            <InputMask
              mask="99/99"
              value={field.value}
              onChange={field.onChange}
              disabled={isLoading}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  label="Validade"
                  variant="outlined"
                  error={!!errors.expiry}
                  helperText={errors.expiry?.message}
                  fullWidth
                  sx={inputStyle}
                />
              )}
            </InputMask>
          )}
        />

        <Controller
          name="cvv"
          control={control}
          rules={{ required: "CVV é obrigatório" }}
          render={({ field }) => (
            <InputMask
              mask="999"
              value={field.value}
              onChange={field.onChange}
              disabled={isLoading}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  label="CVV"
                  variant="outlined"
                  error={!!errors.cvv}
                  helperText={errors.cvv?.message}
                  fullWidth
                  sx={inputStyle}
                />
              )}
            </InputMask>
          )}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-950 text-white py-3 px-4 rounded-md"
      >
        Pagar com Cartão
      </button>
    </form>
  );

  const renderBoletoPayment = () => (
    <div className="p-4">
      <Controller
        name="cpf"
        control={control}
        rules={{ required: "CPF é obrigatório" }}
        render={({ field }) => (
          <InputMask
            mask="999.999.999-99"
            value={field.value}
            onChange={field.onChange}
            disabled={isLoading}
          >
            {(inputProps) => (
              <TextField
                {...inputProps}
                label="CPF"
                variant="outlined"
                error={!!errors.cpf}
                helperText={errors.cpf?.message}
                fullWidth
                sx={inputStyle}
              />
            )}
          </InputMask>
        )}
      />
      <button
        onClick={handleSubmit(onSubmit)}
        className="w-full bg-indigo-950 text-white py-3 px-4 rounded-md mt-4"
      >
        Gerar Boleto
      </button>
    </div>
  );

  return (
    <div className="w-full">
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue)}
        centered
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          '& .MuiTab-root': { 
            color: '#94a3b8',  // Default gray color
            transition: 'color 0.3s',
          },
          '& .Mui-selected': { 
            color: '#17153B' // Active tab color
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#020617' // Bottom line color
          }
        }}
      >
        <Tab icon={<Pix />} label="PIX" />
        <Tab icon={<CreditCard />} label="Cartão" />
        <Tab icon={<Receipt />} label="Boleto" />
      </Tabs>

      <Box className="mt-6">
        {tab === 0 && renderPixPayment()}
        {tab === 1 && renderCardPayment()}
        {tab === 2 && renderBoletoPayment()}
      </Box>
    </div>
  );
}