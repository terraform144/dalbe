<?php 

// chatGPT generated

use Omnipay\Omnipay;

class StripePayment
{
  private $gateway;

  public function __construct($apiKey)
  {
    $this->gateway = Omnipay::create('Stripe');
    $this->gateway->setApiKey($apiKey);
  }

  public function purchase($amount, $card)
  {
    $response = $this->gateway->purchase(array(
      'amount' => $amount,
      'currency' => 'EUR',
      'card' => $card
    ))->send();

    if ($response->isSuccessful()) {
      // Payment was successful
      return $response->getTransactionReference();
    } elseif ($response->isRedirect()) {
      // Redirect to offsite payment gateway
      $response->redirect();
    } else {
      // Payment failed
      return $response->getMessage();
    }
  }

  public function updatePayment($transactionReference, $amount)
  {
    $response = $this->gateway->updateCard(array(
      'transactionReference' => $transactionReference,
      'amount' => $amount
    ))->send();

    if ($response->isSuccessful()) {
      // Payment was updated successfully
      return true;
    } else {
      // Payment update failed
      return $response->getMessage();
    }
  }

  public function cancelPayment($transactionReference)
  {
    $response = $this->gateway->void(array(
      'transactionReference' => $transactionReference
    ))->send();

    if ($response->isSuccessful()) {
      // Payment was cancelled successfully
      return true;
    } else {
      // Payment cancel failed
      return $response->getMessage();
    }
  }
}
