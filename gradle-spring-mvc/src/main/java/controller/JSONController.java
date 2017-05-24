package controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

import org.springframework.ui.Model;
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

	@RequestMapping({ "/", "/home" })
	public ModelAndView showHomePage(Locale locale, Model model) {
		return new ModelAndView("index");
	}

	@RequestMapping(value = "/task", method = RequestMethod.GET)
	public @ResponseBody Task getTask() {
		Task shop = new Task(12L, "Content");
		return shop;
	}

	@RequestMapping(value = "/tasks", method = RequestMethod.GET)
	public @ResponseBody List<Task> getTasks() {
		List<Task> tasks = new ArrayList<>();
		tasks.add(new Task(12L, "Content"));
		tasks.add(new Task(13L, "Content2"));
		tasks.add(new Task(14L, "Content3"));

		return tasks;
	}
}