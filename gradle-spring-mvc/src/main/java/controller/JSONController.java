package controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody Task getShopInJSON() {
		Task shop = new Task(12L, "123");
		return shop;
	}
}