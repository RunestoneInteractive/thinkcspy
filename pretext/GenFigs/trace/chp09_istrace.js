if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["chp09_istrace"] = {"code": "a = [81, 82, 83]\nb = [81, 82, 83]\n\nprint(a is b)\nprint(a == b)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1]}, "ordered_globals": ["a"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 2]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83], "2": ["LIST", 81, 82, 83]}, "stdout": ""}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 2]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83], "2": ["LIST", 81, 82, 83]}, "stdout": "False\n"}, {"line": 5, "event": "return", "func_name": "<module>", "globals": {"a": ["REF", 1], "b": ["REF", 2]}, "ordered_globals": ["a", "b"], "stack_to_render": [], "heap": {"1": ["LIST", 81, 82, 83], "2": ["LIST", 81, 82, 83]}, "stdout": "False\nTrue\n"}]}