
let tokenFromDoc = {
    "settings": {
        "currency": "USD",
        "language": "en",
        "project_id": 12345,
        "ui": {
            "size": "medium"
        }
    },
    "user": {
        "email": {
            "value": "user@site.com"
        },
        "id": {
            "value": "user_2"
        },
        "name": {
            "value": "John Smith"
        }
    }
}

let tokenWithPurchase = {
    "user": {
        "id": {
            "value": "user_1",
            "allow_modify": false
        },
        "name": {
            "value": "John Smith",
            "allow_modify": false
        },
        "email": {
            "value": "user@site.com",
            "allow_modify": false
        },
        "country": {
            "value": "US",
            "allow_modify": true
        }
    },
    "settings": {
        "project_id": 12345,
        "currency": "USD",
        "language": "en",
        "ui": {
            "size": "medium",
            "desktop": {
                "virtual_item_list": {
                    "layout": "list",
                    "button_with_price": true
                }
            },
            "components": {
                "virtual_currency": {
                    "custom_amount": true
                }
            }
        }
    }
};