<?php

class MolliePayment
{
    protected $apiKey;
    protected $baseUrl;

    public function __construct(string $apiKey)
    {
        $this->apiKey = $apiKey;
        $this->baseUrl = 'https://api.mollie.com/v2/';
    }

    public function createPayment(string $amount, string $description, string $redirectUrl)
    {
        $url = $this->baseUrl . 'payments';

        $data = [
            'amount' => [
                'currency' => 'EUR',
                'value' => $amount,
            ],
            'description' => $description,
            'redirectUrl' => $redirectUrl,
            'method' => 'ideal',
            'metadata' => [
                'order_id' => uniqid(),
            ],
        ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => json_encode($data),
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer {$this->apiKey}",
                "Content-Type: application/json"
            ),
        ));

        $response = json_decode(curl_exec($curl), true);

        curl_close($curl);

        return $response;
    }

    public function updatePayment(string $paymentId, string $description)
    {
        $url = $this->baseUrl . "payments/{$paymentId}";

        $data = [
            'description' => $description,
        ];

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "PATCH",
            CURLOPT_POSTFIELDS => json_encode($data),
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer {$this->apiKey}",
                "Content-Type: application/json"
            ),
        ));

        $response = json_decode(curl_exec($curl), true);

        curl_close($curl);

        return $response;
    }

    public function cancelPayment(string $paymentId)
    {
        $url = $this->baseUrl . "payments/{$paymentId}/refunds";

        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_HTTPHEADER => array(
                "Authorization: Bearer {$this->apiKey}",
                "Content-Type: application/json"
            ),
        ));

        $response = json_decode(curl_exec($curl), true);

        curl_close($curl);

        return $response;
    }
}
