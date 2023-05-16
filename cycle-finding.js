class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

function hasCycle(head) {
    let tortoise = head;
    let hare = head;

    while (hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) {
            return true;
        }
    }

    return false;
}

function findCycleStart(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let tortoise = head;
    let hare = head;

    while (hare !== null && hare.next !== null) {
        tortoise = tortoise.next;
        hare = hare.next.next;

        if (tortoise === hare) {
            break;
        }
    }

    if (hare === null || hare.next === null) {
        return null;
    }

    tortoise = head;

    while (tortoise !== hare) {
        tortoise = tortoise.next;
        hare = hare.next;
    }

    return tortoise;
}