if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["cl_change_parm"] = {"code": "def square(x):\n    y = x * x\n    x = 0       # assign a new value to the parameter x\n    return y\n\nx = 2\nz = square(x)\nprint(z)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1]}, "ordered_globals": ["square"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 7, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "x": 2}, "ordered_globals": ["square", "x"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 1, "event": "call", "func_name": "square", "globals": {"square": ["REF", 1], "x": 2}, "ordered_globals": ["square", "x"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 2}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "x": 2}, "ordered_globals": ["square", "x"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 2}, "ordered_varnames": ["x"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "x": 2}, "ordered_globals": ["square", "x"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 2, "y": 4}, "ordered_varnames": ["x", "y"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "square", "globals": {"square": ["REF", 1], "x": 2}, "ordered_globals": ["square", "x"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 0, "y": 4}, "ordered_varnames": ["x", "y"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 4, "event": "return", "func_name": "square", "globals": {"square": ["REF", 1], "x": 2}, "ordered_globals": ["square", "x"], "stack_to_render": [{"func_name": "square", "is_parent": false, "frame_id": 1, "parent_frame_id_list": [], "encoded_locals": {"x": 0, "y": 4, "__return__": 4}, "ordered_varnames": ["x", "y", "__return__"], "is_zombie": false, "is_highlighted": true, "unique_hash": "square_f1"}], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 8, "event": "step_line", "func_name": "<module>", "globals": {"square": ["REF", 1], "x": 2, "z": 4}, "ordered_globals": ["square", "x", "z"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": ""}, {"line": 8, "event": "return", "func_name": "<module>", "globals": {"square": ["REF", 1], "x": 2, "z": 4}, "ordered_globals": ["square", "x", "z"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "square(x)", null]}, "stdout": "4\n"}]}