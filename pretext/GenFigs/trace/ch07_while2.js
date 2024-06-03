if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["ch07_while2"] = {"code": "def sumTo(aBound):\n    \"\"\" Return the sum of 1+2+3 ... n \"\"\"\n\n    theSum  = 0\n    aNumber = 1\n    while aNumber <= aBound:\n        theSum = theSum + aNumber\n        aNumber = aNumber + 1\n    return theSum\n\nprint(sumTo(4))\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 11, "event": "step_line", "func_name": "<module>", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4}, "ordered_varnames": ["aBound"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4}, "ordered_varnames": ["aBound"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 0}, "ordered_varnames": ["aBound", "theSum"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 0, "aNumber": 1}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 0, "aNumber": 1}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 1, "aNumber": 1}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 1, "aNumber": 2}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 1, "aNumber": 2}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 3, "aNumber": 2}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 3, "aNumber": 3}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 3, "aNumber": 3}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 6, "aNumber": 3}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 6, "aNumber": 4}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 6, "aNumber": 4}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 10, "aNumber": 4}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 10, "aNumber": 5}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 9, "event": "step_line", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 10, "aNumber": 5}, "ordered_varnames": ["aBound", "theSum", "aNumber"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 9, "event": "return", "func_name": "sumTo", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [{"func_name": "sumTo", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"aBound": 4, "theSum": 10, "aNumber": 5, "__return__": 10}, "ordered_varnames": ["aBound", "theSum", "aNumber", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "sumTo_f1"}], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": ""}, {"line": 11, "event": "return", "func_name": "<module>", "globals": {"sumTo": ["REF", 1]}, "ordered_globals": ["sumTo"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "sumTo(aBound)", null]}, "stdout": "10\n"}]}