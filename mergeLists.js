/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function merge(list1, list2) {
	let temp = new ListNode(0, null);
	let nodo = temp;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			nodo.next = list1;
			list1 = list1.next;
		} else {
			nodo.next = list2;
			list2 = list2.next;
		}
		nodo = nodo.next;
	}

	nodo.next = list1 || list2;
	return temp.next;
}
