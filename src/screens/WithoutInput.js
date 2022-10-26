import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Text, Button, View} from 'react-native';
import {RebillSdk} from '@rebill-bindings/sdk-reactnative';
import {organizationId, customer, cardHolder, transaction} from './constants';

const WithoutInput = () => {
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
  checkout.setAlias('santitest2');
  checkout.setNumber('4509953566233704');
  checkout.setExpiry('11/25');
  checkout.setCvc('123');
  useEffect(() => {
    checkout.getPrices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleOnPressCheckout = async () => {
    setCheckoutInProcess(true);
    await checkout.checkout();
    setCheckoutInProcess(false);
  };
  return (
    <View style={styles.container}>
      <Button title="Ejecutar checkout" onPress={handleOnPressCheckout} />
      {checkoutInProcess ? <ActivityIndicator /> : <Text>{`${price}`}</Text>}
      {result && <Text>{`Result: ${JSON.stringify(result)}`}</Text>}
      {error && <Text>{`Error: ${JSON.stringify(error)}`}</Text>}
    </View>
  );
};

export default WithoutInput;

const styles = StyleSheet.create({
  container: {marginHorizontal: 12, marginVertical: 16},
});
