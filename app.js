(function() {
    const bitpayForm = document.getElementById('bitpayButton');
    bitpayForm.addEventListener('click', generateInvoice);
    
    async function generateInvoice(event) {
        event.preventDefault();
        const invoiceId = await axios.post('https://staging.bitpay.com/checkout', {
            action: 'checkout',
            posData: '',
            data: 'YzNHKdC1iQeZoR3gfFxF1N0JyhglsfO6hyFIawpMSUVdNRBBiu2A8/EdM6E0GqvQJ7VeSdeL5+KZTkEo+/eaiOR2mMH79hzVdCPfwHvcyECNibmB0WQTrqliB4abGlRYtplunFqpg2XnFzzcDSvHPQ=='
        });
        bitpay.showInvoice(invoiceId);
    }
})();
