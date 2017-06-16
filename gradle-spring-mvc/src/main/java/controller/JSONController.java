package controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import object.Task;

/**
 * JsonControler get {@link Task} by request / page
 * 
 * @version 1.0
 * @author aka47
 *
 */
@RestController
public class JSONController {

	private List<Task> tasks = new ArrayList<>();

	{
		tasks.add(new Task(1L, "First"));
		tasks.add(new Task(2L, "Second"));
		tasks.add(new Task(3L, "Third"));
	}

	@RequestMapping({ "/", "/home" })
	public ModelAndView showHomePage(Locale locale, Model model) {
		return new ModelAndView("index");
	}

	@RequestMapping(value = "/posttask", method = RequestMethod.POST)
	public Task postTask(@RequestBody String content) {
		System.out.println("Task content: " + content);
		Task task = new Task(1L, content);
		tasks.add(task);
		return task;
	}

	@RequestMapping(value = "/gettasks", method = RequestMethod.GET)
	public @ResponseBody List<Task> getTasks() {
		return tasks;
	}
}