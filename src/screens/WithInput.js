import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';
import {CreditCardInput, RebillSdk} from '@rebill-bindings/sdk-reactnative';
import {
  defaultValues,
  organizationId,
  customer,
  cardHolder,
  transaction,
} from './constants';

const WithInput = () => {
  const [checkoutInProcess, setCheckoutInProcess] = useState(false);
  const [price, setPrice] = useState(0);
  const [result, setResult] = useState();
  const [error, setError] = useState();
  const checkout = new RebillSdk(organizationId, true);
  checkout.setCustomer(customer);
  checkout.setCardHolder(cardHolder);
  checkout.setTransaction(transaction);
  checkout.setElements('@rebill/sdk-reactnative');
  checkout.setCallbacks({
    onSuccessPrices: p => setPrice(p),
    onSuccess: r => setResult(r),
    onError: e => setError(e),
  });
  useEffect(() => {
    checkout.getPrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.container}>
      <CreditCardInput
        defaultValues={defaultValues}
        rebillSdk={checkout}
        onCheckoutInProcess={setCheckoutInProcess}
        validColor="black"
        invalidColor="red"
        placeholderColor="darkgray"
        onPay={card => console.log(card)}
      />
      {checkoutInProcess ? <ActivityIndicator /> : <Text>{`${price}`}</Text>}
      {result && <Text>{`Result: ${JSON.stringify(result)}`}</Text>}
      {error && <Text>{`Error: ${JSON.stringify(error)}`}</Text>}
    </View>
  );
};

export default WithInput;

const styles = StyleSheet.create({
  container: {marginHorizontal: 12, marginVertical: 16},
});
