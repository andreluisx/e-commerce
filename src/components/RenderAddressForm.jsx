import { useForm, Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import { TextField } from "@mui/material";
import { useState } from "react";

const inputStyle = {
    backgroundColor: '#f1f5f9', // Garantir que o fundo do input seja branco
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white', // Fundo branco mesmo quando em erro
      color: '#172554',
      '&.Mui-focused': {
        borderColor: '#172554', // Cor personalizada para a borda quando em foco
      },
      '& fieldset': {
        borderColor: '#172554',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#172554',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#172554', // Cor da label quando não está em foco
      '&.Mui-focused': {
        color: '#172554', // Cor da label quando em foco
      },
    },
    
    
  };

export default function RenderAddressForm({ changeScreen, screen }) {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      cep: "",
      street: "",
      number: "",
      complement: "",
      neighborhood: "",
      city: "",
      state: "",
    },
  });

  const searchCEP = async (cep) => {
    if (cep.length !== 8) return;

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        setErrorMessage("CEP não encontrado.");
      } else {
        setValue("street", data.logradouro);
        setValue("neighborhood", data.bairro);
        setValue("city", data.localidade);
        setValue("state", data.estado);
      }
    } catch (error) {
      setErrorMessage("Erro ao buscar o CEP.", error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-bold">Adicionar endereço</p>
        <button
          onClick={() => changeScreen(!screen)}
          className="bg-indigo-950 rounded-md px-3 py-2"
        >
          <p className="text-white font-bold">Voltar</p>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Controller
            name="cep"
            control={control}
            rules={{
              required: "CEP é obrigatório",
              pattern: {
                value: /^\d{5}-?\d{3}$/,
                message: "CEP inválido",
              },
            }}
            render={({ field }) => (
              <InputMask
                mask="99999-999"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e);
                  searchCEP(e.target.value.replace(/\D/g, ""));
                }}
                disabled={isLoading}
              >
                {(inputProps) => (
                  <TextField
                    {...inputProps}
                    label="CEP"
                    variant="outlined"
                    error={!!errors.cep}
                    helperText={errors.cep?.message}
                    fullWidth
                    sx={inputStyle}
                  />
                )}
              </InputMask>
            )}
          />

          <Controller
            name="street"
            control={control}
            rules={{ required: "Rua é obrigatória" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Rua"
                variant="outlined"
                error={!!errors.street}
                helperText={errors.street?.message}
                disabled={isLoading}
                fullWidth
                sx={inputStyle}
              />
            )}
          />

          <Controller
            name="number"
            control={control}
            rules={{ required: "Número é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Número"
                variant="outlined"
                error={!!errors.number}
                helperText={errors.number?.message}
                fullWidth
                sx={inputStyle}
              />
            )}
          />

          <Controller
            name="complement"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Complemento"
                variant="outlined"
                fullWidth
                sx={inputStyle}
              />
            )}
          />

          <Controller
            name="neighborhood"
            control={control}
            rules={{ required: "Bairro é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Bairro"
                variant="outlined"
                error={!!errors.neighborhood}
                helperText={errors.neighborhood?.message}
                disabled={isLoading}
                fullWidth
                sx={inputStyle}
              />
            )}
          />

        <Controller
            name="state"
            control={control}
            rules={{ required: "Estado é obrigatório"  }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Estado"
                variant="outlined"
                error={!!errors.state}
                
                disabled={isLoading}
                fullWidth
                sx={inputStyle}
              />
            )}
          />
        
          <Controller
            name="city"
            control={control}
            rules={{ required: "Cidade é obrigatória" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Cidade"
                variant="outlined"
                error={!!errors.city}
                helperText={errors.city?.message}
                disabled={isLoading}
                fullWidth
                sx={inputStyle}
              />
            )}
          />

        </div>

        {errorMessage && (
          <p className="text-red-500 text-sm">{errorMessage}</p>
        )}

        <button
          type="submit"
          className="w-full bg-indigo-950 text-white py-3 px-4 rounded-md transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "Carregando..." : "Salvar endereço"}
        </button>
      </form>
    </div>
  );
}
