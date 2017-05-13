package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.View;
import org.springframework.web.servlet.ViewResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.BeanNameViewResolver;
import org.springframework.web.servlet.view.json.MappingJackson2JsonView;

import controller.JSONController;

/**
 * Web config. Set {@link JSONController}
 * 
 * @version 1.0
 * @author aka47
 *
 */
@Configuration
@EnableWebMvc
@ComponentScan(basePackageClasses = { JSONController.class })
public class WebConfig extends WebMvcConfigurerAdapter {

	@Bean
	public View jsonTemplate() {
		MappingJackson2JsonView view = new MappingJackson2JsonView();
		view.setPrettyPrint(true);
		return view;
	}

	@Bean
	public ViewResolver viewResolver() {
		return new BeanNameViewResolver();
	}

	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry reg) {
		reg.addResourceHandler("/**").addResourceLocations("/");
	}
}