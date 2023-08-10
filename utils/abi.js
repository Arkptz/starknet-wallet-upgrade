export const ArgentAbi = [
    {
        "name": "constructor",
        "type": "constructor",
        "inputs": [
            {
                "name": "implementation",
                "type": "felt"
            },
            {
                "name": "selector",
                "type": "felt"
            },
            {
                "name": "calldata_len",
                "type": "felt"
            },
            {
                "name": "calldata",
                "type": "felt*"
            }
        ],
        "outputs": []
    },
    {
        "name": "__default__",
        "type": "function",
        "inputs": [
            {
                "name": "selector",
                "type": "felt"
            },
            {
                "name": "calldata_size",
                "type": "felt"
            },
            {
                "name": "calldata",
                "type": "felt*"
            }
        ],
        "outputs": [
            {
                "name": "retdata_size",
                "type": "felt"
            },
            {
                "name": "retdata",
                "type": "felt*"
            }
        ]
    },
    {
        "name": "__l1_default__",
        "type": "l1_handler",
        "inputs": [
            {
                "name": "selector",
                "type": "felt"
            },
            {
                "name": "calldata_size",
                "type": "felt"
            },
            {
                "name": "calldata",
                "type": "felt*"
            }
        ],
        "outputs": []
    },
    {
        "name": "get_implementation",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "implementation",
                "type": "felt"
            }
        ],
        "stateMutability": "view"
    }
];

export const BraavosAbi = [
    {
        "data": [
            {
                "name": "implementation",
                "type": "felt"
            }
        ],
        "keys": [],
        "name": "Upgraded",
        "type": "event"
    },
    {
        "name": "constructor",
        "type": "constructor",
        "inputs": [
            {
                "name": "implementation_address",
                "type": "felt"
            },
            {
                "name": "initializer_selector",
                "type": "felt"
            },
            {
                "name": "calldata_len",
                "type": "felt"
            },
            {
                "name": "calldata",
                "type": "felt*"
            }
        ],
        "outputs": []
    },
    {
        "name": "get_implementation",
        "type": "function",
        "inputs": [],
        "outputs": [
            {
                "name": "implementation",
                "type": "felt"
            }
        ],
        "stateMutability": "view"
    },
    {
        "name": "__default__",
        "type": "function",
        "inputs": [
            {
                "name": "selector",
                "type": "felt"
            },
            {
                "name": "calldata_size",
                "type": "felt"
            },
            {
                "name": "calldata",
                "type": "felt*"
            }
        ],
        "outputs": [
            {
                "name": "retdata_size",
                "type": "felt"
            },
            {
                "name": "retdata",
                "type": "felt*"
            }
        ]
    },
    {
        "name": "__l1_default__",
        "type": "l1_handler",
        "inputs": [
            {
                "name": "selector",
                "type": "felt"
            },
            {
                "name": "calldata_size",
                "type": "felt"
            },
            {
                "name": "calldata",
                "type": "felt*"
            }
        ],
        "outputs": []
    }
];
