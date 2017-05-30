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

	// @RequestMapping(value = "/settasks", method = RequestMethod.POST,
	// params="hasCustomerName=true")
	// @RequestMapping(value = "/settasks", method = RequestMethod.POST)
	// public String postDelivery(
	// @ModelAttribute("deliveryDtoAttribute") DeliveryDto deliveryDto,
	// BindingResult result,
	// ModelMap model) {
	//
	// model.addAttribute("deliveryDtoAttribute", deliveryDto);
	//
	// model.addAttribute("customerNameList",
	// customerService.listAllCustomerNames());
	// model.addAttribute("customerCountryList",
	// customerService.listAllCustomerCountries(deliveryDto.getCustomerName()));
	//
	// return "new-delivery";
	// }

	@RequestMapping(value = "/settasks", method = RequestMethod.POST)
	public String updateHosting(@RequestBody String atrr) {
		tasks.add(new Task(122L, atrr));
		return "SET" + atrr;
	}

	@RequestMapping(value = "/tasks", method = RequestMethod.GET)
	public @ResponseBody List<Task> getTasks() {
		// List<Task> tasks = new ArrayList<>();
		tasks.add(new Task(12L, "Content"));
		tasks.add(new Task(13L, "Content2"));
		tasks.add(new Task(14L, "Content3"));

		return tasks;
	}
}