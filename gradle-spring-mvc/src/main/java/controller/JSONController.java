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

	@RequestMapping({ "/", "/home" })
	public ModelAndView showHomePage(Locale locale, Model model) {
		return new ModelAndView("index");
	}

	@RequestMapping(value = "/task", method = RequestMethod.GET)
	public @ResponseBody Task getTask() {
		Task shop = new Task(12L, "Content");
		return shop;
	}

	@RequestMapping(value = "/posttask", method = RequestMethod.POST)
	// public String postTask(@RequestBody String atrr) {
	public Task postTask(@RequestBody String atrr) {
		System.out.println("Content1: " + atrr.toString());
		tasks.add(new Task(1L, atrr));
		System.out.println("Content: " + atrr);
		return new Task(1L, atrr);
	}

	@RequestMapping(value = "/tasks", method = RequestMethod.GET)
	public @ResponseBody List<Task> getTasks() {
		tasks.add(new Task(12L, "Content"));
		tasks.add(new Task(13L, "Content2"));
		tasks.add(new Task(14L, "Content3"));

		return tasks;
	}
}