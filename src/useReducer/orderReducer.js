
export const initialOrder = {
    orderId: 123,
    status: false,
    takeAway: true,
    pickupTime: new Date(),
    instruction: '',
    userId: 99999,
    subCost: 0.00,
    serviceCharge: 0.3,
    orderItems: []
}

export const ACTIONS = {
    TOGGLE_STATUS: 'TOGGLE_STATUS',
    TOGGLE_TAKEAWAY: 'TOGGLE_TAKEAWAY',
    ONCHANGE_PICKUP_TIME: 'ONCHANGE_PICKUP_TIME',
    ONCHANGE_INSTRUCTION: 'ONCHANGE_INSTRUCTION',
    UPDATE_SUB_COST: 'UPDATE_SUB_COST',
    ADD_ITEM_BY_1: 'ADD_ITEM_BY_1',
    SUBTRACT_ITEM_BY_1: 'SUBTRACT_ITEM_BY_1',
    ADD_ITEM_TO_ORDER: 'ADD_ITEM_TO_ORDER',
    REMOVE_ITEM_FROM_ORDER: 'REMOVE_ITEM_FROM_ORDER',
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT'
}


export const reducer = (order, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_STATUS:
            return order;
        // Currently bound with the make payment button in orderListModal
        case ACTIONS.TOGGLE_TAKEAWAY:
            return { ...order, takeAway: !order.takeAway} 
        case ACTIONS.ONCHANGE_PICKUP_TIME:
            return {...order, pickupTime: action.value};
        case ACTIONS.ONCHANGE_INSTRUCTION:
            return {...order, instruction: action.value};
        case ACTIONS.UPDATE_SUB_COST:
            return order;


        case ACTIONS.ADD_ITEM_BY_1:
            let newList = order.orderItems.slice()
            newList[action.value].qty ++
            return {...order, orderItems: newList}

        case ACTIONS.SUBTRACT_ITEM_BY_1:
          let newOrderedItems2 = order.orderItems.slice()
          newOrderedItems2[action.value].qty = newOrderedItems2[action.value].qty - 1
          return {...order, orderItems: newOrderedItems2}

        // Would be great to create an orderedItem object later
        case ACTIONS.ADD_ITEM_TO_ORDER:
            return {
              ...order,
              orderItems: [
                ...order.orderItems,
                {
                  itemId: action.value.id,
                  name: action.value.name,
                  qty: 1,
                  unitPrice: action.value.unitPrice
                }
              ]
            }
        case ACTIONS.REMOVE_ITEM_FROM_ORDER:
            return {
              ...order,
              orderItems: order.orderItems.filter((item, index) => index !== action.value)
            }
        default:
            return order;
    }
}