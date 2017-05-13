package object;

/**
 * Simple POJO Task for JSON marshaling
 * 
 * @author aka47
 * @version 1.0
 */
public class Task {
	private final long		id;
	private final String	content;

	public Task(long id, String content) {
		this.id = id;
		this.content = content;
	}

	/**
	 * Task id
	 * 
	 * @return id task
	 */
	public long getId() {
		return id;
	}

	/**
	 * Task content
	 * 
	 * @return content task
	 */
	public String getContent() {
		return content;
	}
}